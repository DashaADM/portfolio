export const generatePageNumbers = (
  totalPages: number,
  currentPage: number,
): Array<number | '...'> => {
  const pageNumbers = []
  const maxVisiblePages = 3

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    if (currentPage <= 2) {
      pageNumbers.push(1, 2, 3)
      if (totalPages > 3) pageNumbers.push('...')
      if (totalPages > 3) pageNumbers.push(totalPages)
    } else if (currentPage >= totalPages - 1) {
      pageNumbers.push(1)
      if (totalPages > 3) pageNumbers.push('...')
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      pageNumbers.push(1)
      if (currentPage > 2) pageNumbers.push('...')
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1)
      if (currentPage < totalPages - 1) pageNumbers.push('...')
      pageNumbers.push(totalPages)
    }
  }

  return pageNumbers
}
