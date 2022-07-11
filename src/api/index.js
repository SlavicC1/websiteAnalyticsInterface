export default {
    async fetchIsAllOK(siteId) {
        let response = await fetch('https://track-api.leadhit.io/client/test_auth', {
            headers: {
                'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo', 
                'Leadhit-Site-Id': siteId
            }
        }).catch((e) => {
            console.log(e.message);
        });
        return response.ok;
    }
};