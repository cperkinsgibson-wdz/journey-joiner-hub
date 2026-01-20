import { NoteEditor } from "@/components/editor/NoteEditor";

export default function EditorPage() {
    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col gap-6">
            <header className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                <div>
                    <h1 className="text-xl font-bold text-slate-800">New Note Session</h1>
                    <p className="text-sm text-slate-500">Zero-PHI Environment</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Anonymous Session
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto w-full">
                <NoteEditor />
            </main>
        </div>
    );
}
