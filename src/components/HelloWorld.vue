<template>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animais Extraordinários</title>
</head>

<body>
    <h1>Animais extraordinários</h1>
    <p class="grupo1">
        <img id="tigre" src="../assets/tigre.jpg" width="615" height="300">
    </p>

    <section>
    <p class="grupo2">
        <img id="raposa" src="../assets/raposa.jpg" width="300">
        <img  id="lobo" src="../assets/lobo.jpg" width="300">
    </p>
</section>
<section>
    <h2>Super Predadores</h2>
    <video width="615" height="300" controls>
        <source src="../assets/predadores.mp4" type="video/mp4">
      </video>
    </section>
</body>

</html>
</template>

<script>
export default {
name: 'HelloWorld',
};
</script> f

<style scoped>
/* html {
    font-size: 16px;
} */

template{
    border: double rgb(93, 52, 0) 3px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    background: linear-gradient(rgb(255, 247, 206), rgb(255, 223, 62), rgb(183, 109, 40)); /* Standard syntax */
}

.grupo1 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

/* #tigre {
    max-width: 100%;
    width: 615px;
} */


/* .grupo2 {
    display: flex;
    justify-content: center;
    width: 70%;
    /* justify-content: space-evenly; 

}  */

img {
    border-radius: 20px;
}

/* #lobo {
    max-width: 50%;
    width: 300px;

} */

/* #raposa {
    margin-right: 20px;
    max-width: 50%;
    width: 300px;

} */

h1,h2 {
    text-align: center;
    color: rgb(93, 60, 0);
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

h1{
    padding-bottom: 20px;
    border-bottom: dashed 2px rgb(123, 65, 0);
}

video{
    margin:0 auto;
    display: block;
    width: 70%;
    height: auto;
    border-radius: 20px;
    
}

.grupo2 {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    width: 90%;
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}

#tigre{
    width: 78%;
    height: auto;
}

#lobo{
    width: 42%;
    height: auto;
    margin-left: 5px;
}

#raposa{
    width: 42%;
    height: auto;
    margin-right: 5px;
}

img, video{
    border: double rgb(170, 114, 23) 4px;
}

/* 
@media (min-width: 890px) {
    
}

@media (max-width: 500px) {
    .grupo2{
        width: 90%;
    }

    h1{
        font-size: 90%;
    }
} */
</style>