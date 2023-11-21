import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/assets/homepage/banner/DM-1010.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">灰色系的木板板材</h3>
          <div className="mb-1">
            <p>
            这类木板板材通常具有浅黄色、浅棕色或浅灰色的色调，如原色橡木、原色松木等。自然色系的木板板材适合营造自然、原始或乡村风格的装饰效果。
            </p>
          </div>
          <Button url="/special-colors" title="特殊色系" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/DM-1011-1.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">深色系的木板板材</h3>
          <div className="mb-1">
            <p>
            这类木板板材呈现出深褐色、红棕色或黑色的色调，给人一种沉稳和高贵的感觉。深色系的木板板材常用于营造豪华、传统或古典风格的装饰效果。
            </p>
          </div>
          <Button url="/coloring-system" title="染色系" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/DM-1011-2.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">自然色系的木板板材</h3>
          <div className="mb-1">
            <p>
            这类木板板材呈现出浅灰色、中灰色或深灰色的色调，给人一种现代、时尚和简约的感觉。灰色系的木板板材适用于各种装饰风格，能够与不同的色彩和材质搭配。
            </p>
          </div>
          <Button url="/natural-color-scheme" title="自然色系" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
