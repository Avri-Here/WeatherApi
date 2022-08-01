export const GetWeatherApi = async (key) => {



    const fromServer = await fetch(key)
    const apiFromServer = await fromServer.json();
    return apiFromServer;

}