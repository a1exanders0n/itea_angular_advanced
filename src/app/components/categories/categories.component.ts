import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public onListItemHover(listItem: ListItemType): void {
    console.log(listItem);
    const imageContainer = document.getElementById('categories-image');

    switch (listItem) {
      case 'skincare':
        imageContainer?.setAttribute(
          'src',
          'https://img.freepik.com/free-photo/flat-lay-natural-self-care-products-composition_23-2148990019.jpg'
        );
        break;
      case 'hair':
        imageContainer?.setAttribute(
          'src',
          'https://akns-images.eonline.com/eol_images/Entire_Site/202306/rs_1024x759-230106101630-1024-haircare.jpg'
        );
        break;
      case 'bath and body':
        imageContainer?.setAttribute(
          'src',
          'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1170104811.jpeg'
        );
        break;
      case 'fragrance':
        imageContainer?.setAttribute(
          'src',
          'https://www.makeup.com/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2019/09_september/12-fragrance-last-longer/how-to-make-your-fragrance-last-longer-hero-mudc-091219.jpg'
        );
        break;
      case 'gifts':
        imageContainer?.setAttribute(
          'src',
          'https://wwd.com/wp-content/uploads/2022/12/WWD_LeadArt-1Beauty-Gifts.png'
        );
        break;
      default:
        imageContainer?.setAttribute(
          'src',
          'https://cdn.shopify.com/s/files/1/0268/7952/4921/files/Full_Travel_Closer_2_1600x.jpg?v=1683558212'
        );
    }
  }
}

export type ListItemType =
  | 'skincare'
  | 'hair'
  | 'bath and body'
  | 'fragrance'
  | 'gifts';
