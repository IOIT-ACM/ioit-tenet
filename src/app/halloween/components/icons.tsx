interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export function TenetMarkIcon({ className, width = 26, height = 30 }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 415 469" aria-hidden="true" className={className}>
      <path
        d="M25 0L413 0L377 78L237 78L140 357L40 357L139 78L0 78Z M275 110L372 110L275 390L415 390L390 469L0 469L38 390L178 390Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ className, width = 18, height = 18 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowExternalIcon({ className, width = 16, height = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function PlusIcon({ className, width = 18, height = 18 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronDownArrowIcon({ className, width = 14, height = 14, style }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function BatIcon({ className, style, fill = 'currentColor' }: { className?: string; style?: React.CSSProperties; fill?: string }) {
  return (
    <svg viewBox="0 0 100 44" className={className} style={style} aria-hidden="true">
      <path
        d="M50 18C47 12 44 11 43 14C40 8 30 4 18 6C24 10 26 14 24 18C18 16 10 18 4 24C12 24 18 28 20 34C26 28 34 28 40 32C44 26 47 28 50 36C53 28 56 26 60 32C66 28 74 28 80 34C82 28 88 24 96 24C90 18 82 16 76 18C74 14 76 10 82 6C70 4 60 8 57 14C56 11 53 12 50 18Z"
        fill={fill}
      />
    </svg>
  );
}

export function JackOLanternIcon({ className, width = 440, height = 370 }: IconProps) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 240 200" aria-label="Glowing jack-o'-lantern" role="img">
      <defs>
        <filter id="hwpglow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M112 40C110 24 116 12 130 4L138 12C127 18 124 28 127 42Z" fill="#46522a" />
      <ellipse cx="54" cy="122" rx="48" ry="60" fill="#9c3f09" />
      <ellipse cx="186" cy="122" rx="48" ry="60" fill="#9c3f09" />
      <ellipse cx="82" cy="120" rx="56" ry="68" fill="#c0520b" />
      <ellipse cx="158" cy="120" rx="56" ry="68" fill="#c0520b" />
      <ellipse cx="120" cy="118" rx="54" ry="74" fill="#dc6812" />
      <g className="hw-face" filter="url(#hwpglow)" fill="#ffcc4d">
        <path d="M78 98L106 98L92 72Z" />
        <path d="M134 98L162 98L148 72Z" />
        <path d="M113 116L127 116L120 103Z" />
        <path d="M64 130Q120 180 176 130L164 135L157 148L147 139L139 154L129 143L120 158L111 143L101 154L93 139L83 148L76 135Z" />
      </g>
    </svg>
  );
}

const WITCH_HAT_CONE =
  'M20 82C30 58 42 36 58 22C72 9 92 8 100 24C90 22 80 27 73 35C85 49 93 66 97 84Z';

export function WitchHatIcon({ className }: IconProps) {
  return (
    <svg
      viewBox='0 0 120 112'
      role='img'
      aria-label='Witch hat'
      className={className}
    >
      <defs>
        <clipPath id='hwhatcone'>
          <path d={WITCH_HAT_CONE} />
        </clipPath>
      </defs>
      <ellipse cx='58' cy='90' rx='54' ry='14' fill='#2b1740' />
      <ellipse cx='58' cy='84' rx='54' ry='14' fill='#6b3fa0' />
      <path d={WITCH_HAT_CONE} fill='#4c2880' />
      <rect
        x='0'
        y='62'
        width='120'
        height='18'
        fill='#f07a1a'
        clipPath='url(#hwhatcone)'
      />
      <rect x='49' y='62' width='18' height='18' rx='3' fill='#140a04' />
      <rect
        x='49.75'
        y='62.75'
        width='16.5'
        height='16.5'
        rx='2.25'
        fill='none'
        stroke='#ffa04d'
        strokeWidth='1.5'
      />
      <rect x='58' y='70' width='12' height='2.5' fill='#ffa04d' />
      <path
        d='M31 78C41 57 51 35 65 21'
        fill='none'
        stroke='#8a5fc4'
        strokeWidth='3'
        strokeLinecap='round'
      />
    </svg>
  );
}

const QR_SIZE = 21;

/** A static, non-scannable QR silhouette — real codes are generated per registration once that goes live. */
function buildQrMatrix(): boolean[][] {
  const size = QR_SIZE;
  const grid: boolean[][] = Array.from({ length: size }, () => Array<boolean>(size).fill(false));

  const finder = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  const stampFinder = (originRow: number, originCol: number) => {
    for (let r = 0; r < 7; r += 1) {
      for (let c = 0; c < 7; c += 1) {
        grid[originRow + r]![originCol + c] = finder[r]![c] === 1;
      }
    }
  };
  stampFinder(0, 0);
  stampFinder(0, size - 7);
  stampFinder(size - 7, 0);

  const inQuietZone = (r: number, c: number) => {
    const zones: Array<[number, number]> = [
      [0, 0],
      [0, size - 8],
      [size - 8, 0],
    ];
    return zones.some(([zr, zc]) => r >= zr && r < zr + 8 && c >= zc && c < zc + 8);
  };

  let seed = 42;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (inQuietZone(r, c)) continue;
      grid[r]![c] = rnd() > 0.56;
    }
  }
  return grid;
}

const QR_MATRIX = buildQrMatrix();

export function QrPlaceholderIcon({ className, width = 96, height = 96 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Placeholder QR code — the real pass code arrives after registration"
      className={className}
    >
      {QR_MATRIX.map((row, r) =>
        row.map((on, c) => (on ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="currentColor" /> : null)),
      )}
    </svg>
  );
}

export function TicketStubDividerIcon({ className }: IconProps) {
  const bars = [0, 6, 10, 17, 21, 27, 35, 39, 45, 49, 56, 61, 65, 73, 77, 83, 87, 94];
  const widths = [3, 1.5, 4, 1.5, 2.5, 5, 1.5, 3, 1.5, 4, 2, 1.5, 5, 1.5, 3, 1.5, 4, 2];
  return (
    <svg width="100%" height="54" viewBox="0 0 96 54" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <g fill="currentColor">
        {bars.map((x, i) => (
          <rect key={x} x={x} width={widths[i]} height="54" />
        ))}
      </g>
    </svg>
  );
}
