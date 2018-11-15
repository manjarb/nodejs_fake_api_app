import { thaiFoodList } from "../data/thai-yum-data";

export default (app) => {

    app.get('/api/thai_yum_list', async (req, res) => {
        res.json({
            foods: thaiFoodList
        })
    });
};