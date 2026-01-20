import Link from "next/link";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
                    <ShieldCheck className="mr-2 h-5 w-5 text-blue-600" />
                    <code className="font-bold">Zero-PHI Compliance Tool</code>
                </p>
            </div>

            <div className="relative flex place-items-center flex-col gap-6 mt-16">
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight text-center">
                    Maryland PRP Documentation <br />
                    <span className="text-blue-600">Compliance & Training</span>
                </h1>
                <p className="max-w-xl text-center text-slate-600">
                    A secure, anonymous training validation tool. Write compliant notes,
                    get coaching feedback, and protect revenue.
                </p>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3 text-amber-800 max-w-md">
                    <Lock className="h-5 w-5 flex-shrink-0" />
                    <p className="text-xs">
                        <strong>Disclaimer:</strong> This tool does NOT store PHI.
                        Do NOT enter names, DOBs, or identifiers. This is not an EHR.
                    </p>
                </div>

                <div className="flex gap-4 mt-8">
                    <Link
                        href="/editor"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
                    >
                        <FileText className="h-4 w-4" />
                        Start New Session
                    </Link>
                </div>
            </div>
        </main>
    );
}
