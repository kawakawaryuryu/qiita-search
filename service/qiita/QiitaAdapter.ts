import axios from 'axios'
import { QiitaArticle } from '~/service/qiita/QiitaArticle'

export class QiitaAdapter {
  public async getItems(tag: string): Promise<QiitaArticle[]> {
    const response = await axios.get<QiitaArticle[]>(
      `/qiita/api/v2/tags/${tag}/items`
    )
    return response.data
  }
}
