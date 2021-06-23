exports.getData = (req, res) =>{
    res.send({data:'Esto viene desde ruta de laboratorio para empezar hacer apuestas'})
}

exports.postData = (req, res) =>{
  res.json({message: 'estamos en betLaboratory'})

}