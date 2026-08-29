'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Check,
  ChevronRight,
  Eye,
  Flame,
  Grip,
  LockKeyhole,
  RotateCcw,
  Settings2,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

type LevelId = 1 | 2 | 3 | 4;

type Character = { hanzi: string; pinyin: string; meaning: string };

const packs: Record<string, { label: string; characters: Character[] }> = {
  basics: {
    label: 'Первые слова',
    characters: [
      { hanzi: '人', pinyin: 'rén', meaning: 'человек' },
      { hanzi: '大', pinyin: 'dà', meaning: 'большой' },
      { hanzi: '中', pinyin: 'zhōng', meaning: 'середина' },
      { hanzi: '好', pinyin: 'hǎo', meaning: 'хорошо' },
      { hanzi: '学', pinyin: 'xué', meaning: 'учиться' },
      { hanzi: '家', pinyin: 'jiā', meaning: 'дом, семья' },
    ],
  },
  nature: {
    label: 'Природа',
    characters: [
      { hanzi: '山', pinyin: 'shān', meaning: 'гора' },
      { hanzi: '水', pinyin: 'shuǐ', meaning: 'вода' },
      { hanzi: '火', pinyin: 'huǒ', meaning: 'огонь' },
      { hanzi: '木', pinyin: 'mù', meaning: 'дерево' },
      { hanzi: '雨', pinyin: 'yǔ', meaning: 'дождь' },
      { hanzi: '风', pinyin: 'fēng', meaning: 'ветер' },
    ],
  },
  feelings: {
    label: 'Чувства',
    characters: [
      { hanzi: '爱', pinyin: 'ài', meaning: 'любовь' },
      { hanzi: '乐', pinyin: 'lè', meaning: 'радость' },
      { hanzi: '安', pinyin: 'ān', meaning: 'покой' },
      { hanzi: '想', pinyin: 'xiǎng', meaning: 'думать, скучать' },
      { hanzi: '怕', pinyin: 'pà', meaning: 'бояться' },
      { hanzi: '笑', pinyin: 'xiào', meaning: 'смеяться' },
    ],
  },
};

const levelData: Record<LevelId, { name: string; pieces: number; target: number; eyebrow: string }> = {
  1: { name: 'Ученик', pieces: 4, target: 3, eyebrow: '2 × 2' },
  2: { name: 'Знаток', pieces: 8, target: 5, eyebrow: '4 × 2' },
  3: { name: 'Мастер', pieces: 16, target: 7, eyebrow: '4 × 4' },
  4: { name: 'Шифу', pieces: 16, target: 0, eyebrow: 'испытание' },
};

function shuffle(count: number) {
  const values = Array.from({ length: count }, (_, index) => index);
  do {
    for (let index = values.length - 1; index > 0; index -= 1) {
      const next = Math.floor(Math.random() * (index + 1));
      [values[index], values[next]] = [values[next], values[index]];
    }
  } while (values.every((value, index) => value === index));
  return values;
}

function randomCharacter(pack: string, previous?: string) {
  const list = packs[pack].characters;
  const choices = list.filter((item) => item.hanzi !== previous);
  return choices[Math.floor(Math.random() * choices.length)] ?? list[0];
}

export default function Home() {
  const [pack, setPack] = useState('basics');
  const [level, setLevel] = useState<LevelId>(1);
  const [unlocked, setUnlocked] = useState<LevelId>(1);
  const [character, setCharacter] = useState<Character>(packs.basics.characters[4]);
  const [tiles, setTiles] = useState<number[]>(() => shuffle(4));
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [progress, setProgress] = useState<Record<LevelId, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [totalSolved, setTotalSolved] = useState(0);
  const [solved, setSolved] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState<LevelId | null>(null);
  const [dragged, setDragged] = useState<number | null>(null);
  const [meditating, setMeditating] = useState(false);
  const [inkVisible, setInkVisible] = useState(true);
  const [hints, setHints] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);

  const pieces = levelData[level].pieces;
  const columns = pieces === 4 ? 2 : 4;
  const rows = pieces / columns;

  const beginRound = useCallback(
    (nextLevel = level, nextPack = pack, nextCharacter?: Character) => {
      const nextPieces = levelData[nextLevel].pieces;
      const chosen = nextCharacter ?? randomCharacter(nextPack, character.hanzi);
      setCharacter(chosen);
      setTiles(shuffle(nextPieces));
      setSelected(null);
      setMoves(0);
      setSolved(false);
      setJustUnlocked(null);
      setHints(3);
      setTimeLeft(60);
      if (nextLevel === 4) {
        setMeditating(true);
        setInkVisible(true);
        window.setTimeout(() => {
          setMeditating(false);
          setInkVisible(false);
        }, 3000);
      } else {
        setMeditating(false);
        setInkVisible(true);
      }
    },
    [character.hanzi, level, pack],
  );

  useEffect(() => {
    queueMicrotask(() => {
      const saved = window.localStorage.getItem('hanzi-puzzle-progress');
      if (!saved) return;
      try {
        const parsed = JSON.parse(saved) as { unlocked?: LevelId; totalSolved?: number };
        setUnlocked(parsed.unlocked ?? 1);
        setTotalSolved(parsed.totalSolved ?? 0);
      } catch {
        window.localStorage.removeItem('hanzi-puzzle-progress');
      }
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('hanzi-puzzle-progress', JSON.stringify({ unlocked, totalSolved }));
  }, [unlocked, totalSolved]);

  useEffect(() => {
    if (level !== 4 || solved || meditating) return;
    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          window.setTimeout(() => beginRound(4), 250);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [beginRound, level, meditating, solved]);

  const finishRound = () => {
    setSolved(true);
    setInkVisible(true);
    setTotalSolved((value) => value + 1);
    if (level === 4) {
      setProgress((current) => ({ ...current, 4: current[4] + 1 }));
      return;
    }
    const nextValue = progress[level] + 1;
    setProgress((current) => ({ ...current, [level]: nextValue }));
    if (nextValue >= levelData[level].target && unlocked === level) {
      const nextLevel = (level + 1) as LevelId;
      setUnlocked(nextLevel);
      setJustUnlocked(nextLevel);
    }
  };

  const swapTiles = (from: number, to: number) => {
    if (solved || meditating || from === to) return;
    const next = [...tiles];
    [next[from], next[to]] = [next[to], next[from]];
    setTiles(next);
    setMoves((value) => value + 1);
    setSelected(null);
    if (next.every((value, index) => value === index)) finishRound();
  };

  const chooseTile = (index: number) => {
    if (selected === null) setSelected(index);
    else swapTiles(selected, index);
  };

  const chooseLevel = (nextLevel: LevelId) => {
    if (nextLevel > unlocked) return;
    setLevel(nextLevel);
    beginRound(nextLevel);
  };

  const choosePack = (nextPack: string) => {
    setPack(nextPack);
    beginRound(level, nextPack, randomCharacter(nextPack));
  };

  const showHint = () => {
    if (hints === 0 || inkVisible) return;
    setHints((value) => value - 1);
    setInkVisible(true);
    window.setTimeout(() => setInkVisible(false), 2200);
  };

  const progressValue = level === 4 ? 100 : Math.min(100, (progress[level] / levelData[level].target) * 100);
  const instruction = level === 4
    ? 'Запомните иероглиф. После медитации чернила поблекнут — собирайте по памяти.'
    : 'Меняйте фрагменты местами кликом или перетаскиванием.';
  const tileStyles = useMemo(
    () => ({ '--cols': columns, '--rows': rows }) as React.CSSProperties,
    [columns, rows],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a className="brand" href="#game" aria-label="Hanzi Flow — к игре">
          <span className="brand-seal">字</span><span>Hanzi Flow</span>
        </a>
        <nav className="game-tabs" aria-label="Игры">
          <span className="game-tab active">Пазл</span>
          <span className="game-tab muted">Игра 02</span>
          <span className="game-tab muted">Игра 03</span>
        </nav>
        <div className="header-stat" title="Всего собрано">
          <Sparkles aria-hidden="true" /><span>{totalSolved}</span><span className="header-stat-label">собрано</span>
        </div>
      </header>

      <section className="game-shell" id="game">
        <aside className="level-panel" aria-label="Уровни сложности">
          <div className="panel-heading"><span className="eyebrow">Путь каллиграфа</span><span className="level-count">{unlocked}/4</span></div>
          <div className="level-list">
            {(Object.keys(levelData).map(Number) as LevelId[]).map((id) => {
              const info = levelData[id];
              const isLocked = id > unlocked;
              return (
                <button className={`level-card ${level === id ? 'current' : ''}`} disabled={isLocked} key={id} onClick={() => chooseLevel(id)}>
                  <span className="level-number">{isLocked ? <LockKeyhole /> : String(id).padStart(2, '0')}</span>
                  <span className="level-copy"><strong>{info.name}</strong><small>{id === 4 ? 'Чернила памяти' : `${info.pieces} фрагмента · ${info.eyebrow}`}</small></span>
                  {!isLocked && level === id && <ChevronRight className="level-arrow" />}
                </button>
              );
            })}
          </div>
          <div className="path-note"><Flame aria-hidden="true" /><p><strong>Серия уровня</strong><br />{level === 4 ? `${progress[4]} побед в режиме Шифу` : `${progress[level]} из ${levelData[level].target} иероглифов`}</p></div>
        </aside>

        <section className="puzzle-stage">
          <div className="stage-topline">
            <div><span className="eyebrow">Уровень {String(level).padStart(2, '0')}</span><h1>{levelData[level].name}</h1></div>
            <div className="set-control">
              <label htmlFor="character-set"><Settings2 aria-hidden="true" /> Набор</label>
              <NativeSelect id="character-set" value={pack} onChange={(event) => choosePack(event.target.value)}>
                {Object.entries(packs).map(([id, data]) => <NativeSelectOption value={id} key={id}>{data.label}</NativeSelectOption>)}
              </NativeSelect>
            </div>
          </div>

          <div className="character-clue" aria-live="polite">
            <button className="sound-button" aria-label={`Произношение: ${character.pinyin}`} onClick={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(character.hanzi))}><Volume2 /></button>
            <div><span className="pinyin">{level === 4 && !solved ? '••••' : character.pinyin}</span><span className="meaning">{level === 4 && !solved ? 'значение скрыто' : character.meaning}</span></div>
            <div className="round-stats">{level === 4 ? <><span>00:{String(timeLeft).padStart(2, '0')}</span><small>осталось</small></> : <><span>{String(moves).padStart(2, '0')}</span><small>ходов</small></>}</div>
          </div>

          <div className={`puzzle-wrap ${solved ? 'is-solved' : ''}`}>
            <div className={`puzzle-board ${level === 4 && !inkVisible ? 'faded-ink' : ''}`} style={tileStyles} aria-label={`Пазл иероглифа ${character.hanzi} из ${pieces} частей`}>
              {tiles.map((original, index) => {
                const x = original % columns;
                const y = Math.floor(original / columns);
                return (
                  <button className={`puzzle-tile ${selected === index ? 'selected' : ''}`} draggable={!solved && !meditating} key={`${original}-${index}`} onClick={() => chooseTile(index)} onDragStart={() => setDragged(index)} onDragOver={(event) => event.preventDefault()} onDrop={() => dragged !== null && swapTiles(dragged, index)} aria-label={`Фрагмент ${index + 1}`}>
                    <span className="hanzi-slice" style={{ width: `${columns * 100}%`, height: `${rows * 100}%`, left: `${-x * 100}%`, top: `${-y * 100}%` }}>{character.hanzi}</span>
                    <span className="tile-grip"><Grip /></span>
                  </button>
                );
              })}
            </div>
            {meditating && <div className="meditation-note"><Eye /> Запоминайте…</div>}
            {solved && <div className="success-stamp" aria-live="assertive"><Check /><span>Верно!</span></div>}
          </div>

          <p className="instruction">{instruction}</p>
          <div className="stage-actions">
            <Button variant="outline" size="lg" className="round-button" onClick={() => beginRound(level)}><RotateCcw /> Перемешать</Button>
            {level === 4 && <Button variant="outline" size="lg" className="round-button" onClick={showHint} disabled={hints === 0 || inkVisible || solved}><Eye /> Проявить чернила · {hints}</Button>}
            {solved && <Button size="lg" className="next-button" onClick={() => beginRound(level)}>Следующий иероглиф <ChevronRight /></Button>}
          </div>
        </section>

        <aside className="progress-panel">
          <span className="eyebrow">До нового уровня</span>
          <div className="progress-ring" style={{ '--progress': `${progressValue * 3.6}deg` } as React.CSSProperties}><div><strong>{level === 4 ? progress[4] : progress[level]}</strong><span>{level === 4 ? 'побед' : `из ${levelData[level].target}`}</span></div></div>
          <p>{level === 4 ? 'Вы уже дошли до вершины. Теперь улучшайте свой результат.' : `Соберите ещё ${Math.max(0, levelData[level].target - progress[level])}, чтобы открыть следующий уровень.`}</p>
          <div className="mini-track"><span style={{ width: `${progressValue}%` }} /></div>
          {unlocked > level && <Button className="next-level-button" onClick={() => chooseLevel((level + 1) as LevelId)}>Перейти дальше <ChevronRight /></Button>}
          <div className="wisdom"><span>今日一字</span><blockquote>«Один иероглиф в день — тысяча мыслей в год»</blockquote></div>
        </aside>
      </section>

      {justUnlocked && (
        <dialog open className="unlock-overlay" aria-labelledby="unlock-title">
          <div className="unlock-card">
            <span className="unlock-seal">{justUnlocked === 4 ? '师' : '新'}</span><span className="eyebrow">Новый этап</span>
            <h2 id="unlock-title">Открыт уровень «{levelData[justUnlocked].name}»</h2>
            <p>{justUnlocked === 4 ? 'Финальное испытание: запомните иероглиф за 3 секунды и соберите его, пока чернила почти невидимы.' : `Теперь вас ждёт пазл из ${levelData[justUnlocked].pieces} фрагментов.`}</p>
            <div className="unlock-actions"><Button variant="outline" onClick={() => setJustUnlocked(null)}>Остаться</Button><Button onClick={() => chooseLevel(justUnlocked)}>Перейти <ChevronRight /></Button></div>
          </div>
        </dialog>
      )}
    </main>
  );
}
