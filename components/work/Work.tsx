import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import classes from '../../styles/work/Work.module.css'
import Tag from '../shared/Tag'

interface param {
  header: string
  img: StaticImageData
  text: string
  url: string
  tags: string[]
  card?: boolean
}
export default function Work(props: param) {
  return (
    <div className={classes.work}>
      <h1 className={classes.work__header}>{props.header}</h1>
      <div className={classes.work__imgcontainer}>
        <Link href={props.url ? props.url : '/'}>
          <Image
            alt=""
            src={props.img}
            sizes="100vw"
            style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <Tag text={props.tags} />
      <div className={classes.work__textbox}>
        {props.text.split('\n').map((line, index) => (
          <p className={classes.work__text} key={index}>
            {line}
          </p>
        ))}
      </div>
      {props.url && (
        <Link href={props.url}>
          <button className={classes.btn}>Visit</button>
        </Link>
      )}
    </div>
  )
}
