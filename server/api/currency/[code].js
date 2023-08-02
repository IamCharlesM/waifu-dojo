export default defineEventHandler(async (event) => {

    // handle query params

    const { code} = event.context.params
    const { currencyKey } = useRuntimeConfig()
    
    const uri = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`;
    

    // api call to currencyapi.com
    const {data} = await $fetch(uri)

    return data
})