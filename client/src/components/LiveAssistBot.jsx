import React, { useState, useEffect } from "react";
import "./LiveAssistBot.css";
import { MessageCircle, X, Send } from "lucide-react";

const LiveAssistBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Show toast message every 30 seconds if chat is closed
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isOpen) {
                setShowToast(true);
                // Hide toast after 8 seconds
                setTimeout(() => setShowToast(false), 8000);
            }
        }, 30000);

        return () => clearInterval(interval);
    }, [isOpen]);

    // Initial toast after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowToast(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowToast(false);
    };

    const handleOptionClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className="bot-container">
            {/* Toast Message */}
            {showToast && !isOpen && (
                <div className="bot-toast" onClick={toggleChat}>
                    <p>Want to get more info about clinical trials?</p>
                    <div className="toast-arrow"></div>
                </div>
            )}

            {/* Floating Button */}
            <button className={`bot-floater ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
                {!isOpen && <span className="bot-pulse"></span>}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="bot-window">
                    <div className="bot-header">
                        <h3>Live Assist Bot</h3>
                        <button className="close-btn" onClick={toggleChat}><X size={18} /></button>
                    </div>

                    <div className="bot-content">
                        <div className="bot-message greeting">
                            <p>Hello! How can we help you today?</p>
                        </div>

                        <div className="bot-options">
                            <button
                                className="option-btn"
                                onClick={() => handleOptionClick("https://wa.me/918191054955")}
                            >
                                <span>Cancer Care beyond hospitals</span>
                                <Send size={14} />
                            </button>

                            <button
                                className="option-btn secondary"
                                onClick={() => handleOptionClick("https://wa.me/14155238886")}
                            >
                                <span>Ai powered Clinical Trials Bot</span>
                                <Send size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="bot-footer">
                        <p>Powered by Carcinome</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveAssistBot;
