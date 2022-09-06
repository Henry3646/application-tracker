const reducer = (apps = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...apps, action.payload]
        case 'UPDATE':
            return apps.map((app) => app._id === action.payload._id ? action.payload : app)
        case 'DELETE':
            return apps.filter((app) => app._id !== action.payload)
        default:
            return apps
    }
}

export default reducer
