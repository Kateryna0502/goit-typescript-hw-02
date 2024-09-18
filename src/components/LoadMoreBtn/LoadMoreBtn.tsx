import css from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
	handleLoadMore: () => void;
	isActive: boolean;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps>  = ({ handleLoadMore, isActive }) => {
	return (
		<button onClick={handleLoadMore} className={css.loadMoreBtn} type='button' disabled={isActive}>
			Load more
		</button>
	);
};

export default LoadMoreBtn;