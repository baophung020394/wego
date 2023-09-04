import Button from '@components/Button'
import ImageCustom from '@components/Image'
import { Food } from 'src/models/food'
import PresentIcon from '@assets/images/food/present.png'
import StarIcon from '@assets/images/food/star.png'
import useNormalizedRating from '@hooks/useNormalizedRating'
import Card from '@components/CardItem/Card'
import CardContent from '@components/CardItem/CardContent'
import CardPromotion from '@components/CardItem/CardPromotion'
import CardText from '@components/CardItem/CardText'
import CardTitle from '@components/CardItem/CardTitle'
import CardButton from '@components/CardItem/CardButton'

interface ItemProps {
  food: Food
}
const Item: React.FC<ItemProps> = ({ food }) => {
  const getPromotion = () => {
    switch (food.promotion) {
      case 'gift':
        return <ImageCustom src={PresentIcon} alt='' className='promotion-icon' /> // Hình quà
      case 'discount':
        return <p style={{ textShadow: `0 0 2px #fbdac3` }}>%</p>
      case '1+1':
        return <p>1+1</p> // Text "1+1"
      default:
        return null // Không có biểu tượng
    }
  }

  const getBackgroundPromotion = () => {
    switch (food.promotion) {
      case 'gift':
        return '#01b0fe'
      case 'discount':
        return '#ff686f' // Text "%"
      case '1+1':
        return '#8F64FE' // Text "1+1"
      default:
        return ''
    }
  }

  return (
    <Card>
      <CardContent>
        <CardPromotion backgroundColor={getBackgroundPromotion()}> {getPromotion()}</CardPromotion>
        <ImageCustom src={food.imageUrl} alt={Item.name} className='card__image' />
        <CardText>
          <CardTitle>{food.name}</CardTitle>
          <CardButton>
            <Button backgroundColor='#e9eaee' color='#828b90' icon={StarIcon}>
              {useNormalizedRating(food.rating)}
            </Button>
            <Button backgroundColor='#e9eaee' color='#828b90'>
              {food.minCookTime} - {food.maxCookTime} min
            </Button>
            {food.isNew ? (
              <Button backgroundColor='#e9eaee' color='#66ceb1'>
                New
              </Button>
            ) : null}
          </CardButton>
        </CardText>
      </CardContent>
    </Card>
  )
}
export default Item
