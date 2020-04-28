export const state = () =>  ({
    tags: []
});

export const mutations = {
    newTag(state, tag) {
        state.tags = [...state.tags, tag]
    },
    updateTags(state, tags) {
        state.tags = tags
    }
}