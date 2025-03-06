<template>
  <div class="mx-auto max-w-[1480px] p-10">
    <div class="mb-5 rounded border p-5 shadow-lg">
      <div class="mb-5 grid grid-cols-3 gap-4">
        <select name="kind">
          <option value="">請選擇種類</option>
          <option value="狗">狗</option>
          <option value="貓">貓</option>
          <option value="其他">其他</option>
        </select>
        <select name="sex">
          <option value="">請選擇性別</option>
          <option value="M">公</option>
          <option value="F">母</option>
          <option value="N">未知</option>
        </select>
        <select name="bodyType">
          <option value="">請選擇體型</option>
          <option value="SMALL">小</option>
          <option value="MEDIUM">中</option>
          <option value="BIG">大</option>
        </select>
        <select name="age">
          <option value="">請選擇年齡</option>
          <option value="CHILD">幼年</option>
          <option value="ADULT">成年</option>
        </select>
        <select name="sterilization">
          <option value="">是否絕育</option>
          <option value="T">未結紮</option>
          <option value="F">已結紮</option>
        </select>
        <select name="bacterin">
          <option value="">是否已施打疫苗</option>
          <option value="T">是</option>
          <option value="F">否</option>
        </select>
        <select id="cobVariety" name="form-select" class="form-select">
          <option value="">請選擇品種/物種</option>
          <option value="混種犬">混種犬</option>
          <option value="貴賓犬">貴賓犬</option>
          <option value="瑪爾濟斯犬">瑪爾濟斯犬</option>
          <option value="博美犬">博美犬</option>
          <option value="柴犬">柴犬</option>
          <option value="臘腸犬">臘腸犬</option>
          <option value="長毛臘腸">長毛臘腸</option>
          <option value="吉娃娃犬">吉娃娃犬</option>
          <option value="長毛吉娃娃">長毛吉娃娃</option>
          <option value="台灣犬">台灣犬</option>
          <option value="約克夏">約克夏</option>
          <option value="西施犬">西施犬</option>
          <option value="迷你雪納瑞">迷你雪納瑞</option>
          <option value="大型雪納瑞">大型雪納瑞</option>
          <option value="黃金獵犬">黃金獵犬</option>
          <option value="雪納瑞">雪納瑞</option>
          <option value="米格魯犬">米格魯犬</option>
          <option value="拉不拉多犬">拉不拉多犬</option>
          <option value="哈士奇(西伯利亞雪橇犬)">哈士奇(西伯利亞雪橇犬)</option>
          <option value="法國鬥牛犬">法國鬥牛犬</option>
          <option value="威爾斯柯基犬">威爾斯柯基犬</option>
          <option value="日本狐狸犬">日本狐狸犬</option>
          <option value="鬥牛犬(英國)">鬥牛犬(英國)</option>
          <option value="德國狼犬(德國牧羊犬)">德國狼犬(德國牧羊犬)</option>
          <option value="喜樂蒂牧羊犬">喜樂蒂牧羊犬</option>
          <option value="比熊犬">比熊犬</option>
          <option value="英國古代牧羊犬">英國古代牧羊犬</option>
          <option value="邊境牧羊犬">邊境牧羊犬</option>
          <option value="哈瓦那犬">哈瓦那犬</option>
          <option value="可卡犬(美系)">可卡犬(美系)</option>
          <option value="澳洲牧羊犬">澳洲牧羊犬</option>
          <option value="可卡犬(英系)">可卡犬(英系)</option>
          <option value="比利時牧羊犬(格羅安達/馬利諾/坦比連)">
            比利時牧羊犬(格羅安達/馬利諾/坦比連)
          </option>
          <option value="迷你品(迷你杜賓)">迷你品(迷你杜賓)</option>
          <option value="可麗牧羊犬(蘇格蘭牧羊犬)">
            可麗牧羊犬(蘇格蘭牧羊犬)
          </option>
          <option value="中亞牧羊犬">中亞牧羊犬</option>
          <option value="巴哥犬">巴哥犬</option>
          <option value="馬瑞馬牧羊犬">馬瑞馬牧羊犬</option>
          <option value="加泰隆尼亞牧羊犬">加泰隆尼亞牧羊犬</option>
          <option value="迷你美國牧羊犬">迷你美國牧羊犬</option>
          <option value="邊境梗">邊境梗</option>
          <option value="白毛(瑞士)牧羊犬">白毛(瑞士)牧羊犬</option>
          <option value="德國剛毛指示犬">德國剛毛指示犬</option>
          <option value="秋田犬">秋田犬</option>
          <option value="美系秋田犬">美系秋田犬</option>
          <option value="鬆獅犬">鬆獅犬</option>
          <option value="西高地白梗">西高地白梗</option>
          <option value="大麥町">大麥町</option>
          <option value="諾福克梗犬">諾福克梗犬</option>
          <option value="捕鼠梗犬">捕鼠梗犬</option>
          <option value="北京犬">北京犬</option>
          <option value="獒犬">獒犬</option>
          <option value="杜賓犬">杜賓犬</option>
          <option value="洛威納犬(羅威那犬)">洛威納犬(羅威那犬)</option>
          <option value="傑克羅素梗">傑克羅素梗</option>
          <option value="拉薩犬">拉薩犬</option>
          <option value="日本狆">日本狆</option>
          <option value="蝴蝶犬">蝴蝶犬</option>
          <option value="牛頭梗">牛頭梗</option>
          <option value="波士頓梗">波士頓梗</option>
          <option value="沙皮犬">沙皮犬</option>
          <option value="英國獵狐犬">英國獵狐犬</option>
          <option value="獵狐梗">獵狐梗</option>
          <option value="史必茲(史畢諾犬)">史必茲(史畢諾犬)</option>
          <option value="巴吉度犬">巴吉度犬</option>
          <option value="查理士犬">查理士犬</option>
          <option value="美國惡霸犬">美國惡霸犬</option>
        </select>
      </div>
      <button
        class="h-9 w-full rounded bg-[#138f63] text-white shadow-sm duration-200 hover:bg-[#138f64d7]"
      >
        搜尋
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
