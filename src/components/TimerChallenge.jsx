import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

function TimerChallenge({ title, targetTime }) {
    const timerRef = useRef();
    const dialogRef = useRef();
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const [isModalVisible, setModalVisible] = useState(false); // State to track modal visibility

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    function handleResetTimer() {
        setRemainingTime(targetTime * 1000);
        setModalVisible(false); // Close modal when timer resets
    }

    function handleStartTimer() {
        timerRef.current = setInterval(() => {
            setRemainingTime(prevTimeRemaining => {
                if (prevTimeRemaining <= 0) {
                    clearInterval(timerRef.current);
                    setModalVisible(true); // Open modal when time runs out
                    return 0;
                }
                return prevTimeRemaining - 10;
            });
        }, 10);
    }

    function handleStopTimer() {
        setModalVisible(true); // Open modal when timer is stopped
        clearInterval(timerRef.current);
    }

    return (
        <>
            {isModalVisible && (
                <ResultModal
                    targetTime={targetTime}
                    result={remainingTime <= 0 ? "lost" : "won"} // Determine result based on remaining time
                    ref={dialogRef}
                    remainingTime={remainingTime}
                    onReset={handleResetTimer}
                />
            )}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopTimer : handleStartTimer}>
                        {timerIsActive ? 'Stop!' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running..' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}


export default TimerChallenge;
