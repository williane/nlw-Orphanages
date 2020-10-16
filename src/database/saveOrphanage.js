function saveOrphanage(db, orphanage) {
  return db.run(`
    insert into orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        instructions,
        opening_hours,
        open_on_weekends,
        images
    ) values (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}",
        "${orphanage.images}"        
    )
`);
}

module.exports = saveOrphanage;
