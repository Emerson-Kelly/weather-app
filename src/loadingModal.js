import { handleAPI } from "./apiHandler";

export function initiateLoadModal(isLoading) {
    let initiateLoading = document.getElementById('initiateLoadModal');
    if (isLoading) {
        initiateLoading.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;
    }
    else if (handleAPI && initiateLoadModal) {
        initiateLoading.innerHTML = ``;
    }
}



