
import * as PaginationStyles from './Pagination.Styles'

export default function Pagination ({ itemsPerPage, totalItems, paginate } : any) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <PaginationStyles.Nav>
        <PaginationStyles.Ul className="pagination">
          {pageNumbers.map(number => (
            <PaginationStyles.Li key={number} className="page-item">
              <PaginationStyles.a
                href="#!"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </PaginationStyles.a>
            </PaginationStyles.Li>
          ))}
        </PaginationStyles.Ul>
      </PaginationStyles.Nav>
    );
};