/**
 * Sanitizes database/API error messages to prevent information leakage.
 * Returns user-friendly messages without exposing internal details.
 */
export const getSafeErrorMessage = (error: any): string => {
  const code = error?.code;
  const message = error?.message?.toLowerCase() || '';

  // Database constraint errors
  if (code === '23505') {
    return 'This item already exists. Please use a different value.';
  }
  if (code === '23503') {
    return 'Invalid reference. Please check your selection.';
  }
  if (code === '23514') {
    return 'The provided value is not allowed. Please check your input.';
  }

  // RLS / permission errors
  if (message.includes('rls') || message.includes('policy') || code === '42501') {
    return 'You do not have permission to perform this action.';
  }

  // Auth errors - generic to prevent enumeration
  if (message.includes('invalid login credentials') || message.includes('invalid password')) {
    return 'Email or password is incorrect.';
  }
  if (message.includes('already registered') || message.includes('already been registered')) {
    return 'Unable to create account. Please try a different email or sign in.';
  }
  if (message.includes('email not confirmed')) {
    return 'Please confirm your email address before signing in.';
  }

  // Network errors
  if (message.includes('fetch') || message.includes('network') || message.includes('timeout')) {
    return 'A network error occurred. Please check your connection and try again.';
  }

  return 'An unexpected error occurred. Please try again.';
};
