import './styles/components/ProgressBar.scss'

type ProgressBarVariant = 'green' | 'blue' | 'red'

type ProgressBarProps = {
    value: number
    max: number
    variant?: ProgressBarVariant
    showLabel?: boolean
}

function ProgressBar({
    value,
    max,
    variant = 'green',
    showLabel = true,
}: ProgressBarProps) {
    const percent = max > 0 ? Math.min(Math.max(value / max, 0), 1) * 100 : 0

    return (
        <div className={`progress-bar progress-bar--${variant}`}>
            <div
                className="progress-bar__track"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
            >
                <div
                    className="progress-bar__fill"
                    style={{ width: `${percent}%` }}
                />
            </div>
            {showLabel && (
                <p className="progress-bar__label">{value} / {max}</p>
            )}
        </div>
    )
}

export default ProgressBar
