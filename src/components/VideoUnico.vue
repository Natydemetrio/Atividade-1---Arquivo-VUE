<template>
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animais Extraordinários</title>
    </head>

    <body>
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
    name: 'VideoUnico',
    props: {
        msg: String
    }
};
</script>
    
<style scoped>
template {
    border: double rgb(93, 52, 0) 3px;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    background: linear-gradient(rgb(255, 247, 206), rgb(255, 223, 62), rgb(183, 109, 40));
    /* Standard syntax */
}


h2 {
    text-align: center;
    color: rgb(93, 60, 0);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}


video {
    margin: 0 auto;
    display: block;
    width: 70%;
    height: auto;
    border-radius: 20px;

}


section {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}


video {
    border: double rgb(170, 114, 23) 4px;
}
</style>