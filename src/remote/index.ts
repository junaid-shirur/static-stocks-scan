export const remoteUrl = 'https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6'

export const getStockDetails = async () => {
    const response = await fetch(remoteUrl)
        .then(res => res.json())
    return response.data
}