<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style2.css">
    <title>Landing Page</title>
</head>
<body>
<main class="article-main">
    <section class="article-body">
        <h2>How Cats Became the Best Programmers</h2>
        <p>
            Every year, thousands of cats secretly learn programming while their owners are sleeping.
            They write websites, create games, and even fix bugs before humans wake up.
        </p>
        <h3>The Secret Cat Coding School</h3>
        <figure class="article-figure">
            <img src="img/meimei in minecraft ☆☆.jpg" alt="cat coding">
            <figcaption>A cat writing JavaScript at midnight.</figcaption>
        </figure>
        <?php foreach ($articles as $article): ?>
        <blockquote class="article-blockquote">
            <span class="categorie"><?= $article ['categorie_libelle']?></span>
            <h1><?= $article ['title']?></h1>
            <div class="article-contenu">
                <img src="img/<?= $article ['image']?>" alt="">
                <div class="article-blockquote-quote">
                    <p>
                        <?= $article ['contenu']?>
                    </p>
                    <cite><?= $article ['cite']?></cite>
                </div>
            </div>
        </blockquote>
        <?php endforeach;?>
        <ul class="article-list">
            <li><strong>Wake up at 3 AM</strong> to write new code.</li>
            <li><strong>Debug programs</strong> by walking across the keyboard.</li>
            <li><strong>Create websites</strong> using HTML, CSS, JavaScript, and CatScript.</li>
            <li><strong>Sleep for 18 hours</strong> after finishing the project.</li>
        </ul>
        <h3>The Future of Cat Developers</h3>
        <p>
            Experts believe that by 2035, every software company will hire at least one senior cat developer.
            Their favorite payment is fish instead of money, and they never miss a deadline unless they find a cardboard box to sleep in.
        </p>
    </section>
</main>
</body>
</html>