export const volumeAction = (state: boolean) => {
    return {
        type: 'VOLUME_CONTROL',
        state
    }
}