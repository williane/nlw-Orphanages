const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // await saveOrphanage(db, {
    //     lat: "-27.222633",
    //     lng:  "-49.6555874",
    //     name: "Lar dos Meninos",
    //     whatsapp: "999999999",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     images: [
    //         "https://images.unsplash.com/photo-1602647675036-52cffb901015?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //         "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "1"

    // });

    const selectedOrphanages = await db.all('select * from orphanages');
    console.log(selectedOrphanages);

    // const orphanage = await db.all('select * from orphanages where id = "1"');
    // console.log(orphanage);

    // await db.run ('update orphanages set open_on_weekends = "0" where id = "2"');

});