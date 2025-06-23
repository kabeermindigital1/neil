import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TrueFocus.css';

interface TrueFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
    sentence = 'True Focus',
    manualMode = false,
    blurAmount = 5,
    borderColor = 'green',
    glowColor = 'rgba(0, 255, 0, 0.6)',
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const words = sentence.split(' ');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef(
        []
    );
    const [focusRect, setFocusRect] = useState<FocusRect>({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
    });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);
            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
            const parentRect = containerRef.current!.getBoundingClientRect();
            const activeRect =
                wordRefs.current[currentIndex]!.getBoundingClientRect();

            console.log('Focus rect calculation:', {
                parentRect: {
                    left: parentRect.left,
                    top: parentRect.top,
                    width: parentRect.width,
                    height: parentRect.height,
                },
                activeRect: {
                    left: activeRect.left,
                    top: activeRect.top,
                    width: activeRect.width,
                    height: activeRect.height,
                },
                calculated: {
                    x: activeRect.left - parentRect.left,
                    y: activeRect.top - parentRect.top,
                    width: activeRect.width,
                    height: activeRect.height,
                },
            });

            setFocusRect({
                x: activeRect.left - parentRect.left,
                y: activeRect.top - parentRect.top,
                width: activeRect.width,
                height: activeRect.height,
            });
        }, 100);
    }, [currentIndex, words.length]);

    // Initialize focus rect on mount
    useEffect(() => {
        setTimeout(() => {
            if (wordRefs.current[0] && containerRef.current) {
                const parentRect = containerRef.current.getBoundingClientRect();
                const firstWordRect =
                    wordRefs.current[0]!.getBoundingClientRect();

                console.log('Initial focus rect:', {
                    parentRect: {
                        left: parentRect.left,
                        top: parentRect.top,
                        width: parentRect.width,
                        height: parentRect.height,
                    },
                    firstWordRect: {
                        left: firstWordRect.left,
                        top: firstWordRect.top,
                        width: firstWordRect.width,
                        height: firstWordRect.height,
                    },
                    calculated: {
                        x: firstWordRect.left - parentRect.left,
                        y: firstWordRect.top - parentRect.top,
                        width: firstWordRect.width,
                        height: firstWordRect.height,
                    },
                });

                setFocusRect({
                    x: firstWordRect.left - parentRect.left,
                    y: firstWordRect.top - parentRect.top,
                    width: firstWordRect.width,
                    height: firstWordRect.height,
                });
            }
        }, 200);
    }, []);

    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex ?? 0);
        }
    };

    return (
        <div className="focus-container" ref={containerRef}>
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={(el) => {
                            if (el) {
                                wordRefs.current[index] = el;
                            }
                        }}
                        className={`focus-word ${manualMode ? 'manual' : ''} ${
                            isActive && !manualMode ? 'active' : ''
                        }`}
                        style={
                            {
                                filter: manualMode
                                    ? isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`
                                    : isActive
                                    ? `blur(0px)`
                                    : `blur(${blurAmount}px)`,
                                transition: `filter ${animationDuration}s ease`,
                                '--border-color': borderColor,
                                '--glow-color': glowColor,
                            } as React.CSSProperties
                        }
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="focus-frame"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: 1,
                }}
                transition={{
                    duration: animationDuration,
                    ease: 'easeInOut',
                }}
                style={
                    {
                        '--border-color': borderColor,
                        '--glow-color': glowColor,
                    } as React.CSSProperties
                }
            >
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;
