import 'rc-pagination/assets/index.css';

import Pagination from 'rc-pagination';
import React from 'react';

import theme from '@/styles/theme';

import { Container, Button } from './styles';

interface IProps {
  data: {
    total?: number;
    perPage?: number;
  };
  currentPage: number;
  changePage(page: number);
}

const PaginationComponent: React.FC<IProps> = ({
  data,
  currentPage,
  changePage,
}) => {
  return (
    <Container>
      <Pagination
        current={currentPage}
        total={data.total}
        pageSize={data.perPage || 0}
        onChange={changePage}
        showTitle={false}
        // showLessItems
        // showPrevNextJumpers={false}
        // showQuickJumper={false}
        simple
        itemRender={(page, type) => (
          <Button typePage={type} color={theme.colors.grayLight} />
        )}
      />
    </Container>
  );
};

export default PaginationComponent;
