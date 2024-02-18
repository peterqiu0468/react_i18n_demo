# 定义布局

## 1. `NavBar` 导航栏

使用 `Brand` 和 `Collapse` 组件，`Brand` 用于显示网站名称、Logo，`Collapse` 用于显示导航链接。

```tsx
<Navbar fluid rounded>
  <Navbar.Brand href="https://flowbite.com/">
    <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span className="self-center whitespace-nowrap text-xl font-semibold">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Collapse>
    <Navbar.Link href="#" active>
      Home
    </Navbar.Link>
    <Navbar.Link href="#">About</Navbar.Link>
    <Navbar.Link href="#">Services</Navbar.Link>
    <Navbar.Link href="#">Pricing</Navbar.Link>
    <Navbar.Link href="#">Contact</Navbar.Link>
  </Navbar.Collapse>
</Navbar>
```

然后添加 `Dropdown` 组件， 用以选择语言

```tsx
<div className="flex md:order-2">
  <Dropdown
    arrowIcon={false}
    inline
    label={
      <>
        <Flag.US />
        English (US)
      </>
    }
    theme={{
      inlineWrapper:
        "inline-flex items-center font-medium justify-center, px-4 py-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100",
    }}
  >
    <Dropdown.Item>
      <Flag.US width={3.5} />
      English (US)
    </Dropdown.Item>
    <Dropdown.Item>
      <Flag.CN width={3.5} />
      简体中文
    </Dropdown.Item>
  </Dropdown>
  <Navbar.Toggle />
</div>
```

## 2. 处理切换事件

添加一个函数 `handleLanguageChange`，用于处理语言切换事件，使用 `useState` 定义一个状态 `lng`，用于保存当前语言。

```tsx
const [lng, setLng] = useState<LanguageProps>(Language.EN);
function handleLanguageChange(language: LanguageProps) {
  setLng(language);
}
```

然后将固定展示的语言改为动态展示，并为 `Dropdown.Item` 组件添加点击事件。

```tsx
<Dropdown
  arrowIcon={false}
  inline
  label={
    <>
      {lng.flag}
      {lng.label}
    </>
  }
  theme={{
    inlineWrapper:
      "inline-flex items-center font-medium justify-center, px-4 py-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100",
  }}
>
  <Dropdown.Item
    onClick={() => {
      handleLanguageChange(Language.EN);
    }}
  >
    <Flag.US width={3.5} />
    English (US)
  </Dropdown.Item>
  <Dropdown.Item
    onClick={() => {
      handleLanguageChange(Language.ZH);
    }}
  >
    <Flag.CN width={3.5} />
    简体中文
  </Dropdown.Item>
</Dropdown>
```

## 3. 自定义组件

为显示国旗，简单自定义了一个组件 `Flag`，用于显示国旗图标。

```tsx
import flagUS from "../assets/us.svg";
import flagCN from "../assets/cn.svg";

interface FlagProps {
  width?: number;
}

function US({ width }: FlagProps) {
  const classnames = `rounded-full me-3 w-${width ?? 5} h-${width ?? 5}`;
  return <img src={flagUS} className={classnames} />;
}

function CN({ width }: FlagProps) {
  const classnames = `rounded-full me-3 w-${width ?? 5} h-${width ?? 5}`;
  return <img src={flagCN} className={classnames} />;
}

export const Flag = {
  US,
  CN,
};
```
