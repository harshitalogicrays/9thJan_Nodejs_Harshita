import dns from 'dns'
// dns.lookup("www.logicraysacademy.com",(err,address,family)=>{
//     if(err) throw err
//     console.log(address);
//     console.log(family); //ipv4 ,ipv6   
// })

// dns.resolve('www.logicraysacademy.com','A',(err,address)=>{
//     if(err) throw err
//     console.log(address);
// })

dns.reverse('68.178.226.177',(err,hostname)=>{
    if(err) throw err
    console.log(hostname);
})