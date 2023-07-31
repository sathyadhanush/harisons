function Pagination({
  activePage,
  onPageChange,
  isPrev,
  isNext,
}) {
  return (
    <div className="flex-content-center" style={{ paddingBottom: 25, paddingTop: 25, columnGap: 6 }}>
      <ion-icon
        style={{ color: isPrev ? '#1885F2' : 'lightGray', cursor: 'pointer', fontSize: '22px' }}
        onClick={() => {
          if (isPrev) {
            onPageChange(activePage - 1);
          }
        }}
        name="chevron-back-outline"
      />
      <ion-icon
        style={{ color: isNext ? '#1885F2' : 'lightGray', cursor: 'pointer', fontSize: '22px' }}
        onClick={() => {
          if (isNext) {
            onPageChange(activePage + 1);
          }
        }}
        name="chevron-forward-outline"
      />
    </div>
  );
}

export default Pagination;
