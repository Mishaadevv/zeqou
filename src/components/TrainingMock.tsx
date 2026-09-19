const steps = ['Model', 'Dataset', 'Method', 'Settings', 'Check', 'Train', 'Result'];

/** Rendered, not faked: no real screenshots exist yet, so the preview is a CSS mock. */
export function TrainingMock() {
  return (
    <div className="preview-mock mock-train" role="img" aria-label="ZeqouXTraining training workspace preview">
      <div className="mock-bar">
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-dot" />
        <span className="mock-name">
          <img src="./assets/apps/xtraining/icon.png" alt="" width={20} height={20} />
          <span className="mock-title">zeqouxtraining — run qwen2.5-0.5b-lora</span>
        </span>
      </div>

      <div className="mock-steps">
        {steps.map((step) => (
          <span
            key={step}
            className={`mock-step${step === 'Train' ? ' active' : ''}`}
          >
            {step}
          </span>
        ))}
      </div>

      <div className="mock-train-body">
        <div className="mock-card">
          <span className="mock-card-title">Loss</span>
          <svg className="mock-chart" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="mock-chart-line"
              d="M0 12 C30 40 55 62 85 70 S150 82 190 84 S255 86 300 87"
              fill="none"
            />
          </svg>
        </div>
        <dl className="mock-metrics">
          <div>
            <dt>Step</dt>
            <dd>120 / 300</dd>
          </div>
          <div>
            <dt>Loss</dt>
            <dd>1.284</dd>
          </div>
          <div>
            <dt>VRAM</dt>
            <dd>9.1 / 12 GB</dd>
          </div>
        </dl>
      </div>

      <div className="mock-progress">
        <span className="mock-progress-fill" />
      </div>
    </div>
  );
}
