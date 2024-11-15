import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <p>
                Hurmatly o'quvchi. Ushbu o'zbek nasrlari <a href="https://n.ziyouz.com/" target="_blank">ziyouz</a> saytidan yuklab olindi.
                Ziyouz saytida pdf tarzida taqdim etilgan bu asarlarni kamina dasturchilik qobiliyatimni ishga solib kitoblarni yuklab oldim, so'ngra pdf varaqlarini OCR texnologiyasi yordamida  textga o'girdim.
                Avvalombor ushbu asarlarni o'zbek o'quvchilariga taqdim etgani uchun Ziyouz saytiga minnatdorchilik bildiraman.
                PDF varaqlari ba'zi holatlarda tiniq bo'lmagani sababli Python OCR texnologiyasi textni aniq o'gira olmagan.
                Shuning uchun textda xatoliklar mavjud. Shunday bo'lsa ham kitoblarni o'qish va ulardan bahramand bo'lish mumkin.
            </p>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link className="btn btn-primary" to="/books">Kitoblar</Link>
                </li>
            </ul>
        </>
    )
}

export default Dashboard;