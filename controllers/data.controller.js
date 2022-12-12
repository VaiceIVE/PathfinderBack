const db = require('../db')


class dataController
{
    getFakeData(req, res)
    {
        res.json(
            [
                {
                "cardId" : "122",
                "tittle" : "Мероприятие 122",
                "text" : "111 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
                "date" : "20.11.2022  19:00",
                "img" : "prev.png"
                },
                {
                "cardId" : "123",
                "tittle" : "Мероприятие 123",
                "text" : "112 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
                "date" : "23.11.2022  19:00",
                "img" : "prev.png"
                },
                {
                "cardId" : "124",
                "tittle" : "Мероприятие 124",
                "text" : "113 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
                "date" : "09.12.2022  19:00",
                "img" : "prev.png"
                },
                {
                "cardId" : "125",
                "tittle" : "Мероприятие 125",
                "text" : "114 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
                "date" : "09.12.2022  20:00",
                "img" : "prev.png"
                },
                {
                "cardId" : "126",
                "tittle" : "Мероприятие 126",
                "text" : "115 Вебинар вот такой да классно супер отлично. Вот да... Сейчас бы такой вебинар, мечта.",
                "date" : "10.12.2022  19:00",
                "img" : "next.png"
                }
            ]
        )
    }
    async getTokenData(req, res)
    {
        const token = req.params.token;
        const data = await db.query("SELECT * FROM data WHERE token = $1", [token]);
        console.log(data.rows);
        res.json(data.rows);
    }

    async getAllData(req, res)
    {
        const data = await db.query("SELECT * FROM data");
        console.log(data.rows);
        res.json(data.rows);
    }

    async getExactTokenData(req, res)
    {
        const {token, requirements} = req.body;
        console.log(req.body)
        const data = await db.query("SELECT * FROM data WHERE token = $1", [token]);
        console.log(data.rows);
        res.json(data.rows);
    }
}


module.exports = new dataController()