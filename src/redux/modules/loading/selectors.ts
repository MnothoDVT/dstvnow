import { AppState } from "../../root.reducer";

export const useLoading = (app: AppState) => app.loading.loading;