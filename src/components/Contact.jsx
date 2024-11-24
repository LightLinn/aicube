'use client';
import { motion } from 'framer-motion';
import { IconClock, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { useState } from 'react';
import PrimaryButton from '@/components/button/PrimaryButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // 建立 FormData 物件
    const formDataObj = new FormData();
    formDataObj.append('entry.1066506841', formData.name);
    formDataObj.append('entry.1396539317', formData.email);
    formDataObj.append('entry.1911901167', formData.phone);
    formDataObj.append('entry.1154739024', formData.message);

    try {
      // 使用 fetch 發送請求
      const response = await fetch(
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe8a10pmMKFq9_VsZT5C6gw8K_jJsk05tQgDVDE-fgYsCdFpg/formResponse',
        {
          method: 'POST',
          mode: 'no-cors', // 重要：避免 CORS 錯誤
          body: formDataObj
        }
      );

      // 清除表單
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // 顯示成功訊息
      setSubmitStatus('success');
      
      // 可選：顯示成功通知
      showNotification('感謝您的來信，我們將盡快回覆您！', 'success');
      
    } catch (error) {
      console.error('提交表單時發生錯誤:', error);
      setSubmitStatus('error');
      showNotification('發送失敗，請稍後再試。', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 通知函數
  const showNotification = (message, type) => {
    // 如果您想使用 toast 通知，可以安裝 react-hot-toast 或其他通知庫
    alert(message);
  };

  return (
    <section className="py-20 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
                  Let's talk!
                </span>
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Office */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconMapPin className="w-5 h-5 text-[#70BEFA]" stroke={1.5} />
                  <span className="text-[#70BEFA] font-medium">Office:</span>
                </div>
                <div className="text-gray-300 pl-8">
                  <p>3F, No. 276, Minzu Rd.</p>
                  <p>Hsinchu City.</p>
                  <p>TAIWAN R.O.C.</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#70BEFA]/20 to-transparent" />

              {/* Email */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconMail className="w-5 h-5 text-[#70BEFA]" stroke={1.5} />
                  <span className="text-[#70BEFA] font-medium">Email:</span>
                </div>
                <a 
                  href="mailto:tcstudio2022@gmail.com" 
                  className="text-gray-300 hover:text-[#70BEFA] transition-colors duration-200 pl-8 block"
                >
                  tcstudio2022@gmail.com
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#70BEFA]/20 to-transparent" />

              {/* Mobile */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconPhone className="w-5 h-5 text-[#70BEFA]" stroke={1.5} />
                  <span className="text-[#70BEFA] font-medium">Mobile:</span>
                </div>
                <a 
                  href="tel:+886 917000120" 
                  className="text-gray-300 hover:text-[#70BEFA] transition-colors duration-200 pl-8 block"
                >
                  +886 917000120
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#70BEFA]/50 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="tcstudio2022@gmail.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#70BEFA]/50 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Mobile</label>
                <input
                  type="tel"
                  required
                  placeholder="+886 9 17000120"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#70BEFA]/50 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white font-medium block">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi team AI Cube! I'm reaching out for..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#70BEFA]/50 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <PrimaryButton 
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </PrimaryButton>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center mt-4"
                >
                  感謝您的來信，我們將盡快回覆您！
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center mt-4"
                >
                  發送失敗，請稍後再試。
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;