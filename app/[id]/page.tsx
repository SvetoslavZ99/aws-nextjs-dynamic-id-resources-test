import styles from './page.module.css';

export default function Page({ params }: { params: { id: string } }) {
  return <div className={styles.container}>My Post: {params.id}</div>
}