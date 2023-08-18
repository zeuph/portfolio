import Image from 'next/image'
import Link from 'next/link'
import classes from '../../styles/work/Work.module.css'
import Tag from '../shared/Tag'

interface param {
  header: string
  img: any
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
        <Image
          alt=""
          src={props.img}
          sizes="100vw"
          style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <Tag text={props.tags} />
      <p className={classes.work__text}>{props.text}</p>
      <Link href={`http://94.254.50.252/${props.url}`}>
        <button className={classes.btn}>Visit</button>
      </Link>
    </div>
  )
}
