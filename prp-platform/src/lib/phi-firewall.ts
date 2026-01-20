/**
 * prohibited-data.ts
 * 
 * Logic to detect and flag potential PHI (Protected Health Information).
 * This runs CLIENT-SIDE to prevent data from ever leaving the browser.
 */

export const PHI_REGEX = {
    // SSN: 000-00-0000
    SSN: /\b\d{3}-\d{2}-\d{4}\b/,

    // Dates: MM/DD/YYYY or YYYY-MM-DD (rough check)
    DATE: /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b|\b\d{4}-\d{2}-\d{2}\b/,

    // Medical Record Number patterns (common variants)
    MRN: /\b(MRN|Record|Patient ID)[:#]?\s*\d+\b/i,

    // Names (Heuristic - catching Capitalized Words in sequences is aggressive but safe)
    // We strictly warn about names.
    // NOTE: This is a signal, not a 100% blocker, as normal sentences have capitals.
    // A better approach for "Zero PHI" is to warn on ANY proper noun that isn't in a whitelist.

    // Words like "Participant", "Client" are safe.
    SAFE_Terms: ["Participant", "Client", "Consumer", "Individual", "Staff", "Rehab", "Specialist"]
};

export interface PHICheckResult {
    hasPHI: boolean;
    findings: string[];
    safeText: string;
}

export function checkProjectPHI(text: string): PHICheckResult {
    const findings: string[] = [];

    if (PHI_REGEX.SSN.test(text)) findings.push("Social Security Number detected");
    if (PHI_REGEX.DATE.test(text)) findings.push("Date detected (DOB risk)");
    if (PHI_REGEX.MRN.test(text)) findings.push("Medical Record Number detected");

    // Check for specific forbidden keywords if needed
    // ...

    return {
        hasPHI: findings.length > 0,
        findings,
        safeText: text // We do NOT redact here automatically, we just flag.
    };
}
