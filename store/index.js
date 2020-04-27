export const state = () =>  {
    tags: []
}

export const mutations = {
    newTag(state, tag) {
        state.tags = [...state.tags, tag]
        console.log('Se ejecuto!')
    },
    updateTags(state, tags) {
        state.tags = tags
    }
}