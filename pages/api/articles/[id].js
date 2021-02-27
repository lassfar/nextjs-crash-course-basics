import {articles} from '../../data/data';

export default function handler (req, res) {
  const articleId = req.query.id;
  const myArticle = articles.find(article => article.id === articleId);

  if (myArticle) {
    res.status(200).json(myArticle);
  } else {
    res.status(404).send({message: `Article ${articleId} not found!`})
  }
}

