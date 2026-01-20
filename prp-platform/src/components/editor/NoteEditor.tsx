"use client";

import { useState, useEffect } from "react";
import { checkProjectPHI } from "@/lib/phi-firewall";
import { AlertTriangle, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function NoteEditor() {
    const [content, setContent] = useState("");
    const [phiResult, setPhiResult] = useState<{ hasPHI: boolean; findings: string[] }>({ hasPHI: false, findings: [] });
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Real-time PHI Check
    useEffect(() => {
        const result = checkProjectPHI(content);
        setPhiResult(result);
    }, [content]);

    const handleAnalyze = async () => {
        if (phiResult.hasPHI) return;
        setIsAnalyzing(true);
        // TODO: Connect to AI Agent
        setTimeout(() => setIsAnalyzing(false), 2000);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

                {/* Toolbar / Status Bar */}
                <div className={cn(
                    "px-4 py-3 border-b flex justify-between items-center transition-colors",
                    phiResult.hasPHI ? "bg-red-50 border-red-100" : "bg-slate-50 border-slate-100"
                )}>
                    <div className="flex items-center gap-2">
                        {phiResult.hasPHI ? (
                            <>
                                <AlertTriangle className="h-5 w-5 text-red-600" />
                                <span className="text-red-700 font-medium">Potential PHI Detected</span>
                            </>
                        ) : (
                            <>
                                <ShieldLock className="h-5 w-5 text-green-600" />
                                <span className="text-green-700 font-medium">Safe for Analysis</span>
                            </>
                        )}
                    </div>
                    <div className="text-xs text-slate-500">
                        {content.length} characters
                    </div>
                </div>

                {/* Editor Area */}
                <textarea
                    className="w-full h-[60vh] p-6 resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-100 text-lg leading-relaxed text-slate-800"
                    placeholder="Type your notes here... (Remember: No Names, No Dates, No Identifiers)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                {/* Warnings Footer */}
                {phiResult.hasPHI && (
                    <div className="px-6 py-4 bg-red-50 border-t border-red-100">
                        <p className="text-sm text-red-800 font-semibold mb-1">Please remove the following before analyzing:</p>
                        <ul className="list-disc list-inside text-sm text-red-700">
                            {phiResult.findings.map((finding, idx) => (
                                <li key={idx}>{finding}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="flex justify-end gap-3">
                <button
                    className="px-6 py-3 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition"
                >
                    Clear
                </button>
                <button
                    onClick={handleAnalyze}
                    disabled={phiResult.hasPHI || content.length === 0 || isAnalyzing}
                    className={cn(
                        "px-8 py-3 rounded-lg font-medium text-white shadow-sm transition flex items-center gap-2",
                        phiResult.hasPHI || content.length === 0
                            ? "bg-slate-300 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    )}
                >
                    {isAnalyzing ? "Analyzing..." : "Running Compliance Lens"}
                    {!isAnalyzing && <CheckCircle className="h-4 w-4" />}
                </button>
            </div>
        </div>
    );
}

function ShieldLock({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    )
}
