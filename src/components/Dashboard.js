import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>
        Hurmatly o'quvchi. Ushbu o'zbek nasrlari{" "}
        <a
          href="https://n.ziyouz.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ziyouz
        </a>{" "}
        saytidan yuklab olindi. Ziyouz saytida pdf tarzida taqdim etilgan bu
        asarlarni kamina dasturchilik qobiliyatimni ishga solib kitoblarni
        yuklab oldim, so'ngra pdf varaqlarini OCR texnologiyasi yordamida textga
        o'girdim. Avvalombor ushbu asarlarni o'zbek o'quvchilariga taqdim etgani
        uchun Ziyouz saytiga minnatdorchilik bildiraman. PDF varaqlari ba'zi
        holatlarda tiniq bo'lmagani sababli Python OCR texnologiyasi textni aniq
        o'gira olmagan. Shuning uchun textda xatoliklar mavjud. Shunday bo'lsa
        ham kitoblarni o'qish va ulardan bahramand bo'lish mumkin.
      </p>
      <div className="list-group">
        <Link className="list-group-item list-group-item-action" to="/books">
          Kitoblar
        </Link>        
      </div>
    </>
  );
};

export default Dashboard;
