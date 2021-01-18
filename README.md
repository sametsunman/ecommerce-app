# Alışveriş Uygulaması

### Ekran Görüntüleri

<div align="center">
  <img width="400" src="/screenshots/1.png"><br />
  <em>Ürünler Sayfası<em><br /><br />
  <img width="400" src="/screenshots/2.png"><br />
  <em>Ürün Detayı Sayfası<em><br /><br />
  <img width="400" src="/screenshots/3.png"><br />
  <em>Sepet Sayfası<em>
</div>

Kullanıcıların ürün satın alabildiği bir uygulamaya ihtiyaç bulunmaktadır.<br />

Kullanıcılar uygulamanın açılış sayfasında sistemde bulunan tüm ürünleri toplu olarak görebilecek, isterse kategorilere göre ürün filtreleme işlemi yapabilecektir. Ürünler kategoriye göre dinamik olarak filtrelenecek ve ana sayfadaki listede güncellencektir. Kategoriler sistemden direkt olarak alınabilir.

Kullanıcı herhangi bir ürünün detayına giderse ürünü sepete ekleyebilecek ya da favoriye alabilecektir, favoriden kaldırabilecektir.

Sepete eklenen ürünler "Sepetim" ekranına gidildiğinde toplu olarak görüntülenecek, kullanıcı ürünleri satın alabilecektir. Kullanıcı herhangi bir ürünü sepetten kaldırabilecektir. Satın alma işleminde ürünler sepetten kaldırılacak, kullanıcıya bir geri bildirimde bulunulacak ve satın alma işlemi telefonun belleğine kaydedilecektir. Yine "Sepetim" ekranında kullanıcı sipariş geçmişini görüntüleyebilecektir. Bu işlem, ekranda bulunan "Geçmişi Görüntüle" gibi bir buton ile Modal penceresi açılarak gerçekleştirilebilir. Sipariş geçmişinde alınan ürünler ve toplam ödenen tutarın görüntülenmesi gerekmektedir.

Benzer şekilde favoriye eklenen ürünlerde cihazın belleğine kaydedilmesi gerekmektedir. Kısaca sipariş geçmişi ve favori ürünler uygulama açılıp kapansa da silinmemelidir.

**API:** https://fakestoreapi.com/docs

**ÖNEMLİ NOTLAR:**

- Uygulamada custom component yapısı ve custom hook yapısına dikkat edilmeli.
- İş bölümü yapılmasında ve bunun için mevcut reponun Project kısmının kullanılmasında fayda var. (Template kısmından "Basic Kanban" seçebilirsiniz.).
- İş parçacıkları ve görev dağılımı tamamiyle sizin insiyatifinize kalmış.
- Tamamlanan projenin ekran görüntülerini mutlaka bu README üzerinden eklemeyi unutmayın.
