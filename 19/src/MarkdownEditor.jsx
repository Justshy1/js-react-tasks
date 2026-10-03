import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    // Создаем ссылку для доступа к DOM-узлу контейнера
    this.editorRef = React.createRef();
    this.editorInstance = null;
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    // Инициализируем сторонний редактор на основе нашей ссылки
    this.editorInstance = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
    });

    // Навешиваем событие изменения контента
    this.editorInstance.addHook('change', () => {
      const content = this.editorInstance.getMarkdown();
      if (onContentChange) {
        onContentChange(content);
      }
    });
  }

  render() {
    return <div ref={this.editorRef} />;
  }
}

export default MarkdownEditor;
// END
