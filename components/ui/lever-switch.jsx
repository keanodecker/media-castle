'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LeverSwitch() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleTap = () => {
    if (checked) return;
    setChecked(true);
    setTimeout(() => router.push('/kontakt'), 400);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">Hebel umlegen zum Starten</p>
      {/* Use a real button so touch events work on all mobile browsers */}
      <button
        type="button"
        aria-label="Zum Kontakt navigieren"
        onClick={handleTap}
        className={`toggle-container${checked ? ' is-checked' : ''}`}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div className="toggle-handle-wrapper">
          <div className="toggle-handle">
            <div className="toggle-handle-knob" />
            <div className="toggle-handle-bar-wrapper">
              <div className="toggle-handle-bar" />
            </div>
          </div>
        </div>
        <div className="toggle-base">
          <div className="toggle-base-inside" />
        </div>
      </button>
    </div>
  );
}
