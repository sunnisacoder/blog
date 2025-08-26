import { atom } from 'nanostores';

export const isLoading = atom(false);

export const showLoading = () => isLoading.set(true);
export const hideLoading = () => isLoading.set(false);
